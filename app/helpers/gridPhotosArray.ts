import { Photo } from "../photos/components/Gallery";

export function gridPhotosArray(
  jsonAnswer: Photo[],
  currentFilter: string,
  version: string
) {
  let index = 0;
  const resultArr = [];
  const currArr = [];
  let currArrIndex = 0;
  while (index < jsonAnswer.length) {
    if (jsonAnswer[index].category === "Дипломы" && version !== "diplomas") {
      index++;
      continue;
    }
    if (jsonAnswer[index].category !== "Дипломы" && version === "diplomas") {
      index++;
      continue;
    }
    if (currentFilter !== "") {
      if (
        jsonAnswer[index].category !== currentFilter &&
        jsonAnswer[index].dateTime.slice(0, 4) !== currentFilter
      ) {
        index++;
        continue;
      }
    }
    currArr.push(jsonAnswer[index]);

    if (index === 0) {
      index++;
      currArrIndex++;
      continue;
    }

    if (index === jsonAnswer.length - 1) {
      resultArr.push([...currArr]);
      currArr.length = 0;
      currArrIndex = 0;
      index++;
      continue;
    }

    if (
      currArrIndex > 0 &&
      jsonAnswer[index].orientation === "horizontal" &&
      currArr[currArrIndex - 1].orientation === "horizontal"
    ) {
      resultArr.push([...currArr]);
      currArr.length = 0;
      currArrIndex = 0;
      index++;
      continue;
    }
    if (currArr.length === 3) {
      resultArr.push([...currArr]);
      currArr.length = 0;
      currArrIndex = 0;
      index++;
      continue;
    }
    index++;
    currArrIndex++;
  }

  return resultArr;
}
