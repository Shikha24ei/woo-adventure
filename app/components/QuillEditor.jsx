import { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const QuillEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
        // Check if Quill instance already exists to avoid creating multiple instances
        if (!editorRef.current.__quill) {
          const quill = new Quill(editorRef.current, {
            theme: 'snow',
          });
          editorRef.current.__quill = quill; // Attach the quill instance to avoid reinitialization
        }
      }
  }, []);
  const handleGetText = () => {
    if (quillInstanceRef.current) {
      const plainText = quillInstanceRef.current.getText(); // Get plain text
      const delta = quillInstanceRef.current.getContents(); // Get Delta object
      const html = quillInstanceRef.current.root.innerHTML; // Get HTML content
      
      console.log('Plain Text:', plainText);
      console.log('Delta:', delta);
      console.log('HTML:', html);
    }
  };

  return <>
   <div ref={editorRef} style={{ height: '200px' }} />
   <button onClick={handleGetText}>Get Text</button>
  </>
};

export default QuillEditor;