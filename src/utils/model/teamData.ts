import { TEmployee } from "../types/team";

export interface IEmployee {
  getEmployee(occupation?: string, occupationExtra?: string): TEmployee;
}

export class Employee implements IEmployee {
  protected employee: TEmployee;

  constructor(employee: TEmployee) {
    this.employee = employee;
    if (employee.url !== "not-found")
      this.employee.previewImg = `/preview/preview_${employee.url}.webp`;
  }

  getEmployee(occupation?: string, occupationExtra?: string) {
    return occupation
      ? {
          ...this.employee,
          shortText: occupation,
          extraText: occupationExtra,
        }
      : {
          ...this.employee,
          // extraText: occupationExtra,
        };
  }
}
