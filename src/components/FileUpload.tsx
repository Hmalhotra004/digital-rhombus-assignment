import { FilePlus } from "lucide-react";

const FileUpload = () => {
  return (
    <button className="border-dashed border-[3px] p-1 rounded-md border-clairvoyant flex gap-x-2 items-center">
      <FilePlus size={20} />
      Add Files
    </button>
  );
};

export default FileUpload;
