import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CourseData {
  title: string;
  code: string;
  department: string;
  description: string;
  teacherId: string;
  files: File[];
}

interface CourseState {
  currentStep: number;
  courseData: CourseData;

  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateData: (data: Partial<CourseData>) => void;
  resetStore: () => void;
}

const initialState: CourseData = {
  title: "",
  code: "",
  department: "",
  description: "",
  teacherId: "",
  files: [],
};

export const useCourseStore = create<CourseState>()(
  persist(
    (set) => ({
      currentStep: 1,
      courseData: initialState,

      setStep: (step) => set({ currentStep: step }),

      nextStep: () =>
        set((state) => ({
          currentStep: Math.min(state.currentStep + 1, 3),
        })),

      prevStep: () =>
        set((state) => ({
          currentStep: Math.max(state.currentStep - 1, 1),
        })),

      updateData: (data) =>
        set((state) => ({
          courseData: { ...state.courseData, ...data },
        })),

      resetStore: () =>
        set({
          currentStep: 1,
          courseData: initialState,
        }),
    }),
    {
      name: "lumatribe-course-storage", // Key for LocalStorage
      // We exclude 'files' from persistence because File objects
      // cannot be easily stringified into LocalStorage
      partialize: (state) => ({
        currentStep: state.currentStep,
        courseData: {
          ...state.courseData,
          files: [],
        },
      }),
    }
  )
);
