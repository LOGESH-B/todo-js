import { createElement, renderSidebar } from "./render";
import { getAreas, addArea } from "./lsManager";
import { events as pubsub } from "./pubsub";

export const eventListeners = () => {
  const areaInput = document.getElementById("filter-area");
  areaInput.addEventListener("input", handleAreaInput);

  const addAreaButton = document.getElementById("add-area");
  addAreaButton.addEventListener("click", handleAddArea);

  const projectInput = document.getElementById("filter-project");
  projectInput.addEventListener("input", handleProjectInput);

  const sidebarElement = document.getElementById("sidebar");
  // console.log(sidebarElement);
  const checkboxElement = sidebarElement.querySelectorAll(
    'input[type="checkbox"]'
  );
  // console.log(checkboxElement);
  checkboxElement.forEach((element) => {
    element.addEventListener("change", handleAreaChecked);
  });
};

function handleAreaInput() {
  const checkboxes = document.getElementById("checkboxes");
  const ul = checkboxes.querySelector("ul");
  const areaInput = document.getElementById("filter-area");
  ul.innerHTML = "";
  filterAreaList();
}

function handleProjectInput(event) {
  console.log("todo: handleProjectInput");
  console.log(event);
}

function handleAddArea() {
  //TODO #7 add contents of the input to area list
  console.log("todo - add contents of input to area list");
  const areaInput = document.getElementById("filter-area").value;
  console.log(areaInput);
  addArea(areaInput);
  filterAreaList();
}

function handleAreaChecked(event) {
  if (event.target.checked) {
    // send message to lsManager that an area has been checked and it should change the status of pinned to true
    // use pubsub for this
    // event.target.id;
    // console.log(typeof output);
    pubsub.emit("CheckboxChanged", { id: event.target.id, checked: true });
  } else {
    pubsub.emit("CheckboxChanged", { id: event.target.id, checked: false });
  }
  // console.log(event.target.id);
}

export function filterAreaList() {
  //TODO #6 make the filter strictly search for all alpha characters before the "/" e.g. searching for f/ will not also return area with fg/ e.g. fg1/
  //TODO #8 resolve the issue where using the filter removes the checkbox status. the same logic may be in initial page render and below
  const checkboxes = document.getElementById("checkboxes");
  const ul = checkboxes.querySelector("ul");
  const areaInput = document.getElementById("filter-area");
  let searchTerm = areaInput.value;
  const areas = getAreas();

  // Remove the "No matches found" message if it exists from previous searches
  const noMatchMessage = document.getElementById("no-match-message");
  if (noMatchMessage) {
    noMatchMessage.remove();
  }

  // Split the search term into prefix and slug.
  let [searchPrefix, searchSlug] = searchTerm.split("/");

  // If searchPrefix is just a letter (without any digit), it's considered as a wildcard search
  let isWildcardSearch = !/\d/.test(searchPrefix); // True if there's no digit in searchPrefix

  let filteredAreas = areas.filter((area) => {
    let areaId = area.areaId.toLowerCase();
    let description = area.description.toLowerCase().split(" ").join("-");

    // If it's a wildcard search, check if areaId starts with searchPrefix and description includes searchSlug
    // Else, check if areaId and description exactly match searchPrefix and searchSlug respectively.
    if (isWildcardSearch) {
      return (
        areaId.startsWith(searchPrefix) && description.includes(searchSlug)
      );
    } else {
      return areaId === searchPrefix && description === searchSlug;
    }
  });

  // If no matches were found, show a message
  if (filteredAreas.length === 0) {
    const messageElement = createElement("p", checkboxes);
    messageElement.id = "no-match-message";
    messageElement.innerHTML = "No matches found"; // Assign an id for future removal
    return; // End the function here as there's nothing else to do
  }

  // Populate the filtered areas
  filteredAreas.forEach((area) => {
    const li = createElement("li", ul);
    const areaDescription = `${area.areaId}-${area.description
      .split(" ")
      .join("-")}`;
    let lowerCaseAreaDescription = areaDescription.toLowerCase();
    const inputElement = createElement("input", li, lowerCaseAreaDescription);
    inputElement.type = "checkbox";
    inputElement.checked = area.pinned;
    const label = createElement("label", li);
    label.textContent = `${area.areaId.toLowerCase()}/${area.slug}`;
    label.htmlFor = lowerCaseAreaDescription;
  });
}
