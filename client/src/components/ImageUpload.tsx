import { useState } from "react";

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

  return (
    <div className="w-80">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="file-input file-input-bordered file-input-ghost w-full max-w-md"
      />

      {previews.length > 0 && (
        <div className="carousel w-full max-w-md rounded-xl overflow-hidden shadow-lg">
          {previews.map((url, index) => {
            const prevIndex = (index - 1 + previews.length) % previews.length;
            const nextIndex = (index + 1) % previews.length;

            return (
              <div
                key={index}
                id={`slide${index}`}
                className="carousel-item relative w-full"
              >
                <img
                  src={url}
                  className="w-full object-cover rounded-lg"
                  alt={`Slide ${index}`}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a
                    href={`#slide${prevIndex}`}
                    className="btn btn-circle size-8"
                  >
                    ❮
                  </a>
                  <a
                    href={`#slide${nextIndex}`}
                    className="btn btn-circle size-8"
                  >
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}