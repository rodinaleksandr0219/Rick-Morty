import { ReactNode } from "react";

export interface LocationCharacter {
  name: string;
}

export interface Character {
  id: number,
  name: string,
  image: string,
  location: LocationCharacter,
  gender: string,
  status: string
}

export interface ModalProps {
  visible: boolean,
  footer: ReactNode,
  detail: Character,
  onClose: () => void
}
