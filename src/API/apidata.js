import axios from "axios";

export const getAllMenu = async (BASE_URL,getType,stateName) => {
	try {
		// const response = await fetch(`${ BASE_URL }/admin/users`, {
		// 	method: 'GET',
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 		Authorization: `Bearer ${ token }`
		// 	}
		// })
		// const data = await response.json()
		// return data
        const url = `${ BASE_URL }/${getType}/${stateName}` 
        console.log(url)
        axios.get(url).then((res) => {
            console.log(res.data);
            // setContents(res.data);
            return res.data;
          });
	} catch (err) {	
		console.error(err)
	}
}