"use client";

export enum Dir {
  FWD = "fwd",
  BACK = "back",
}

export const changeSlideHandler = (
  dir: Dir,
  setImageNumber: React.Dispatch<React.SetStateAction<number>>,
  obj: Array<unknown>
) => {
  if (dir === Dir.FWD) {
    setImageNumber((number) => {
      const newIndex = (number + 1) % obj.length;

      return newIndex;
    });
  } else if (dir === Dir.BACK) {
    setImageNumber((number) => {
      const newIndex = (number - 1 + obj.length) % obj.length;

      return newIndex;
    });
  }
};
