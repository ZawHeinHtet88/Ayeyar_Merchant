import { useTheme } from "@/components/theme-provider";
import JoditEditor from "jodit-react";
import { useEffect, useState } from "react";

type TextEditorProps = {
  field: {
    value: string | undefined;
    onChange: (value: string) => void;
  };
};

export function TextEditor({ field }: TextEditorProps) {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  return (
    <div className="z-[3000]">
      <JoditEditor
        value={field.value || ""}
        onBlur={(newContent) => field.onChange(newContent)} // Use onBlur instead of onChange
        config={{
          theme: isDarkMode ? "dark" : "default",
          height: 400,
          toolbarSticky: false,
          readonly: false,
          uploader: {
            insertImageAsBase64URI: true,
          },
          // Show all available buttons
          buttons: [
            "source",
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "eraser",
            "ul",
            "ol",
            "indent",
            "outdent",
            "left",
            "center",
            "right",
            "justify",
            "font",
            "fontsize",
            "paragraph",
            "brush",
            "file",
            "image",
            "video",
            "table",
            "link",
            "symbol",
            "hr",
            "copyformat",
            "selectall",
            "undo",
            "redo",
            "cut",
            "copy",
            "paste",
            "print",
            "about",
            "fullsize",
          ],
        }}
      />
    </div>
  );
}
