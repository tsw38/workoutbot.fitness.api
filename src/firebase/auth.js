import adminGroup from './groups/admin';

export const grantAdminRole = (admin) => async ({email, idtoken}) => {
    try {
        const user = await admin.auth().getUserByEmail(email);
        const token = await admin.auth().verifyIdToken(idtoken);

        console.warn({user, token});

        if ((user.customClaims && user.customClaims.admin === true ) || token.admin) {
            return {
                status: 200
            };
        }

        if (adminGroup.includes(email) && user.uid === token.uid) {

            const setAdmin = await admin.auth().setCustomUserClaims(user.uid, {
                admin: true
            });

            return {
                status: 200
            };
        } else {
            return {
                status: 200
            }
        }
    } catch (error) {

        return {
            error: error.code,
            message: error.message
        };
    }
}