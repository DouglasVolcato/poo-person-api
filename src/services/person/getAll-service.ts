import { Person } from "../../database/protocols/person-interface";
import { PersonRepositoryInterface } from "../../database/protocols/person-repository-interface";
import { GetAllPersonInterface } from "./protocols/person-services-interface";

export class GetAllPersonUseCase implements GetAllPersonInterface {
  personRepositoryInterface: PersonRepositoryInterface;

  constructor(personRepositoryInterface: PersonRepositoryInterface) {
    this.personRepositoryInterface = personRepositoryInterface;
  }

  execute(): Person[] {
    return this.personRepositoryInterface.getAll();
  }
}
