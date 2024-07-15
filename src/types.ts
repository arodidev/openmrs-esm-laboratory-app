export type FulfillerStatus =
  | "EXCEPTION"
  | "RECEIVED"
  | "COMPLETED"
  | "IN_PROGRESS"
  | "ON_HOLD"
  | "DECLINED";

export interface Result {
  uuid: string;
  orderNumber: string;
  accessionNumber: string;
  patient: Patient;
  concept: Concept;
  action: string;
  careSetting: CareSetting;
  previousOrder: PreviousOrder;
  dateActivated: string;
  scheduledDate: any;
  dateStopped: any;
  autoExpireDate: any;
  encounter: Encounter;
  orderer: Orderer;
  orderReason: any;
  orderReasonNonCoded: any;
  orderType: OrderType;
  urgency: string;
  instructions: any;
  commentToFulfiller: any;
  display: string;
  auditInfo: AuditInfo;
  fulfillerStatus: string;
  fulfillerComment: any;
  specimenSource: SpecimenSource;
  laterality: any;
  clinicalHistory: any;
  frequency: any;
  numberOfRepeats: any;
  links: Link[];
  type: string;
  resourceVersion: string;
}
export interface Creator {
  uuid: string;
  display: string;
  links: Link[];
}
export interface SpecimenSource {
  uuid: string;
  display: string;
  links: Link[];
}
export interface AuditInfo {
  creator: Creator;
  dateCreated: string;
  changedBy: any;
  dateChanged: any;
}
export interface OrderType {
  uuid: string;
  display: string;
  name: string;
  javaClassName: string;
  retired: boolean;
  description: string;
  conceptClasses: any[];
  parent: any;
  links: Link[];
  resourceVersion: string;
}
export interface Orderer {
  uuid: string;
  display: string;
  links: Link[];
}

export interface PreviousOrder {
  uuid: string;
  display: string;
  links: Link[];
  type: string;
}
export interface CareSetting {
  uuid: string;
  name: string;
  description: string;
  retired: boolean;
  careSettingType: string;
  display: string;
  links: Link[];
  resourceVersion: string;
}

export interface Encounter {
  uuid: string;
  display: string;
  links: Link[];
}
export interface Patient {
  uuid: string;
  display: string;
  links: Link[];
}

export interface Link {
  rel: string;
  uri: string;
  resourceAlias: string;
}
export interface Concept {
  conceptClass: ConceptClass;
  uuid: string;
  display: string;
  links: Link[];
}
export interface ConceptClass {
  uuid: string;
}
