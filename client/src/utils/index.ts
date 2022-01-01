export const getCapitalizedName = (fname: string, lname: string) =>
  `${!!fname.length && fname[0].toUpperCase() + fname.slice(1)} ${
    !!lname.length && lname[0].toUpperCase() + lname.slice(1)
  }`;

export const getAgeInYears = (birthday: string) =>
  new Date(new Date().valueOf() - new Date(birthday).valueOf()).getFullYear() -
  1970;
