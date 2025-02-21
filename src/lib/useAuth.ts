import axios from "axios";
import {useState, useEffect} from "react";

export function useAuth() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [isProfileFilled, setIsProfileFilled] = useState(false);
	const [token, setToken] = useState<string | null>(null);
	useEffect(() => {
		setToken(localStorage.getItem("access_token"));
	}, []);

	const fetchProfile = async () => {
		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_API_BASE_URL}customer/profile`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			if (
				response.data.full_name &&
				response.data.passport &&
				response.data.birth_date
			) {
				setIsProfileFilled(true);
			}

			setIsAuthenticated(!!token);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProfile();
	}, []);

	return {isAuthenticated, isLoading, isProfileFilled};
}
