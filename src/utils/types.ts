export type StarProps = {
  starCount: number
};

export type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};