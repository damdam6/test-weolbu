import { create } from 'zustand';

interface ClassState {
  id: number;
  status: 'default' | 'cart' | 'purchase';
  imgUrl: string;
}

interface ClassStore {
  classes: Record<number, ClassState>;
  setClass: (id: number, status: ClassState['status'], imgUrl: string) => void;
  getClass: (id: number) => ClassState | undefined;
}

const useClassStore = create<ClassStore>((set, get) => ({
  classes: {},

  setClass: (id, status, imgUrl) =>
    set((state) => ({
      classes: {
        ...state.classes,
        [id]: { id, status, imgUrl },
      },
    })),

  getClass: (id) => {
    const existingClass = get().classes[id];
    if (existingClass) return existingClass;

    const defaultClass: ClassState = { id, status: 'default', imgUrl: '' };
    set((state) => ({
      classes: {
        ...state.classes,
        [id]: defaultClass,
      },
    }));
    return defaultClass;
  },
}));

export default useClassStore;
