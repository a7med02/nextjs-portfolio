// src/types/index.ts
import { RefObject } from 'react';

export interface SectionRefs {
  home: RefObject<HTMLElement>;
  about: RefObject<HTMLElement>;
  projects: RefObject<HTMLElement>;
  skills: RefObject<HTMLElement>;
  contact: RefObject<HTMLElement>;
}