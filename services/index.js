

export const register_user = async (formData,setIsLoading) => {
    try {
        const res = await fetch('https://turnover-assigment.vercel.app/api/Auth/register', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            },
            method: 'POST',
            body: JSON.stringify(formData),
        });
        const data = res.json();
        setIsLoading(false)
        return data;
    } catch (error) {
        setIsLoading(false)
        console.log('Error in register_user (service) => ', error);
        return error.message || "Something Went Wrong"
    }
};


export const login_user = async (formData, setIsLoading) => {
    try {
        const res = await fetch('https://turnover-assigment.vercel.app/api/Auth/login', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            },
            method: 'POST',
            body: JSON.stringify(formData),
        });
        const data = res.json();
        setIsLoading(false)
        return data;
    } catch (error) {
        setIsLoading(false)
        console.log('Error in login_user (service) => ', error);
        return error.message || "Something Went Wrong"
    }
};