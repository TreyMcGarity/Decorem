import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AxiosWithCreds from "./axoisWithCreds";

const PrivateRoute = ({ element }) => {
	const [auth, setAuth] = useState({ isAuth: false, ready: false });

	useEffect(() => {
		let isMounted = true;

		const checkAuth = async () => {
			try {
				await AxiosWithCreds.get("/auth/verify_session");
				if (isMounted) {
					setAuth({ isAuth: true, ready: true });
				}
			} catch (error) {
				if (isMounted) {
					setAuth({ isAuth: false, ready: true });
				}
			}
		};

		checkAuth();
		return () => {
			isMounted = false;
		};
	}, []);

	if (!auth.ready) {
		return null;
	}

	return auth.isAuth ? element : <Navigate to="/" replace />;
};

export default PrivateRoute;
