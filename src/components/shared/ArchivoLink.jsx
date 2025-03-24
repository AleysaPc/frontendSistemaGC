import { FaFilePdf, FaFileWord, FaFileAlt } from "react-icons/fa";

const BASE_URL = "http://localhost:8000"; // Asegúrate de que coincide con el backend
const FileLink = ({ filePath }) => {
  if (!filePath) return null;

  // Determinar el tipo de archivo por la extensión
  const getFileIcon = (path) => {
    if (path.endsWith(".pdf")) return <FaFilePdf className="text-red-500 text-2xl" />;
    if (path.endsWith(".doc") || path.endsWith(".docx")) return <FaFileWord className="text-blue-500 text-2xl" />;
    return <FaFileAlt className="text-gray-500 text-2xl" />;
  };

  return (
    <a href={`${BASE_URL}${filePath}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
      {getFileIcon(filePath)}
      <span>Ver archivo</span>
    </a>
  );
};

export default FileLink;
