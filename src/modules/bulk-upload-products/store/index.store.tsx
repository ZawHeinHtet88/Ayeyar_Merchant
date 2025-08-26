import { create } from "zustand";
import { persist } from "zustand/middleware";

interface product {
  row: number;
  data: {
    name: string;
    description: string;
    body: string;
    price: string;
    discount: string;
    inventory: string;
    category: string;
    type: string;
    images: string;
    tags: string;
  };
  status: string;
  error: string | null;
}

interface BulkUploadProductState {
  loading: boolean;
  successCount: number;
  failedCount: number;
  processed: number;
  percentage: number;
  failedList: product[];
  successList: product[];
  setFailtedList: (product: product) => void;
  setSuccessList: (product: product) => void;
  setPercentage: (percentage: number) => void;
  setProcessed: (processed: number) => void;
  setLoading: (loading: boolean) => void;
  setSuccessCount: (successCount: number) => void;
  setFailedCount: (failedCount: number) => void;
  reset: () => void; // ✅ added reset
}

export const useBulkUploadProductStore = create<BulkUploadProductState>()(
  persist(
    (set) => ({
      loading: false,
      successCount: 0,
      failedCount: 0,
      processed: 0,
      percentage: 0,
      failedList: [],
      successList: [],
      setFailtedList: (product: product) =>
        set((state) => ({ failedList: [...state.failedList, product] })),
      setSuccessList: (product: product) =>
        set((state) => ({ successList: [...state.successList, product] })),
      setPercentage: (percentage: number) => set({ percentage }),
      setProcessed: (processed: number) => set({ processed }),
      setLoading: (loading: boolean) => set({ loading }),
      setSuccessCount: (successCount: number) => set({ successCount }),
      setFailedCount: (failedCount: number) => set({ failedCount }),
      reset: () =>
        set({
          loading: false,
          successCount: 0,
          failedCount: 0,
          processed: 0,
          percentage: 0,
          failedList: [],
          successList: [],
        }),
    }),
    {
      name: "bulk-upload-product",
    }
  )
);
