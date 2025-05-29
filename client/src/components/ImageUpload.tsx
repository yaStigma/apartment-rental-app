import { useState } from "react";
import ImageSlider from "./ImageSlider";

type ImageUploadProps = {
  onImagesChange: (files: File[]) => void;
};
export default function ImageUpload({ onImagesChange }: ImageUploadProps) {
  const [previews, setPreviews] = useState<string[]>([]);
const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    onImagesChange(files);

    const previewUrls = files.map(file => URL.createObjectURL(file));
    setPreviews(previewUrls);
  };

const photoObjects = previews.map((url, index) => ({
    _id: index.toString(),
    url,
    uploadedAt: new Date().toISOString(), 
  }));


  return (
    <div className="w-80">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="file-input file-input-bordered file-input-ghost w-full max-w-md"
      />

<div className="mt-4">
{photoObjects.length > 0 && (
        <ImageSlider photos={photoObjects}  />
      )}
      </div>
    </div>
  );
}