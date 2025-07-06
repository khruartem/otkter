import { TEmployee, TProjectsUrl, TServicesUrl, TAdminsUrl, TCardType } from "../utils/types";

export interface IEmployee {
  getEmployee(occupation: string, occupationExtra?: string): TEmployee;
}

export class Employee implements IEmployee {
  protected id: number;
  protected type: TCardType;
  protected name: string;
  protected photo: string;
  protected icon: string;
  protected image: string;
  protected url: TProjectsUrl | TServicesUrl | TAdminsUrl | "not-found";
  protected biography?: string;

  constructor(employee: Omit<TEmployee, "occupation" | "occupationExtra">) {
    const { id, name, photo, icon, url, image, biography, type } = employee;
    this.id = id;
    this.name = name;
    this.photo = photo;
    this.type = type;
    this.icon = icon;
    this.url = url;
    this.image = image;
    this.biography = biography;
  }

  getEmployee(occupation: string, occupationExtra?: string) {
    return {
      id: this.id,
      name: this.name,
      occupation: occupation,
      occupationExtra: occupationExtra,
      photo: this.photo,
      type: this.type,
      icon: this.icon,
      image: this.image,
      url: this.url,
      biography: this.biography,
    };
  }
}