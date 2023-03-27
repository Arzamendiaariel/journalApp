

export const fileUpload = async( file ) => {
    if ( !file ) throw new Error('There is no file to upload');

    const cloudUrl = import.meta.env.VITE_CLOUD_URL

    const formData = new FormData();
    formData.append('upload_preset',import.meta.env.VITE_UPLOAD_PRESET);
    formData.append('file', file );

    try {

        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });


        if ( !resp.ok ) throw new Error('Could not upload image')
        const cloudResp = await resp.json();

        return cloudResp.secure_url;

    } catch (error) {
        console.log(error);
        throw new Error( error.message );
    }

}