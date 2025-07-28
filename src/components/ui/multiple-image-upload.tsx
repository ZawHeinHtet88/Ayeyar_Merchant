import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { CloudUploadIcon, X } from "lucide-react";
import { type ControllerRenderProps, type FieldValues, type Path } from "react-hook-form";
import clsx from "clsx";
import { useCallback } from "react";

type ImageType = File | string;

type MultipleImageInputProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
> = {
  field: ControllerRenderProps<TFieldValues, TName>;
  error?: string;
  // This is the parameter for the maximum number of images
  maxFiles?: number;
};

export default function MultipleImageInput<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
>(props: MultipleImageInputProps<TFieldValues, TName>) {
  // Destructure maxFiles from props, with a default value of 5
  const { field, error, maxFiles = 10 } = props;

  const images: ImageType[] = field.value || [];

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Calculate how many more files can be added without exceeding maxFiles
      const remainingSlots = maxFiles - images.length;
      const filesToAddCount = Math.min(acceptedFiles.length, remainingSlots);
      const newFiles = acceptedFiles.slice(0, filesToAddCount);

      // Only update if there are new files to add
      if (newFiles.length > 0) {
        field.onChange([...images, ...newFiles]);
      }
    },
    [images, field, maxFiles],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
    // Disable the dropzone if the image limit is reached
    disabled: images.length >= maxFiles,
  });

  const removeImage = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    field.onChange(updated);
  };

  const isFile = (img: ImageType): img is File => img instanceof File;

  return (
    <div className="space-y-3">
      <div
        {...getRootProps()}
        className={clsx(
          "flex h-[250px] w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed p-6 text-center transition",
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300",
          images.length >= maxFiles && "cursor-not-allowed opacity-50", // Visual indication when disabled
        )}
      >
        <input {...getInputProps()} />

        <p className="text-muted-foreground text-sm">
          <CloudUploadIcon className="mx-auto size-20" />
          {images.length >= maxFiles
            ? `Images uploaded`
            : isDragActive
              ? "Drop the images here..."
              : `Drag & drop or click to upload images`}
        </p>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      {images.length > 0 && (
        <div className="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((img, index) => {
            const src = isFile(img) ? URL.createObjectURL(img) : img;

            return (
              <div key={index} className="group relative">
                <img
                  src={src}
                  alt={`preview-${index}`}
                  className="h-32 w-full rounded-md object-cover shadow"
                />
                <Button
                  type="button"
                  size="icon"
                  variant="destructive"
                  className="absolute top-1 right-1 p-1 opacity-80 group-hover:opacity-100"
                  onClick={() => removeImage(index)}
                >
                  <X size={16} />
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
