
export type SectionId = 'home' | 'about' | 'projects' | 'skills' | 'contact';

export type SectionRefs = {
    [key in SectionId]: React.RefObject<HTMLElement>;
};