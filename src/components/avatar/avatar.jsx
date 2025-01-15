import { useState, useEffect } from 'react';
function Avatar() {

    const [preview, setPreview] = useState(null);

    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview.previewUrl);
            }
        }
    }, [preview]);
    
    function handlePreview(event) {
        const file = event.target.files[0];
        file.previewUrl = URL.createObjectURL(file);
        setPreview(file);
    }   

    return (
        <>
            <input type="file" accept="image/*" onChange={handlePreview}/>
            { preview && <img src={preview.previewUrl} alt="preview" width="80%"/> }
        </>
    )
}   

export default Avatar;