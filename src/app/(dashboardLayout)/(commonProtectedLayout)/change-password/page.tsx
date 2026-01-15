import ChangePasswordForm from "@/components/ChangePasswordForm";

// Dynamic SSR - authenticated page
export const dynamic = "force-dynamic";

const ChangePasswordPage = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Change Password</h1>
            <div className="mx-auto max-w-2xl">
                <div className="rounded-lg border bg-card p-6">
                    <p className="mb-6 text-sm text-muted-foreground">
                        Update your password to keep your account secure. Make sure your new
                        password is strong and unique.
                    </p>
                    <ChangePasswordForm />
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordPage;





// import ReusablePasswordForm from "@/components/ReusablePasswordForm";
// import { changePassword } from "@/services/auth/auth.service";

// const ChangePasswordPage = async ({
//     searchParams,
// }: {
//     searchParams?: Promise<{ redirect?: string }>;
// }) => {
//     const params = (await searchParams) || {};
//     const redirect = params.redirect;
//     return (
//         <div className="flex min-h-screen items-center justify-center">
//             <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
//                 <div className="space-y-2 text-center">
//                     <h1 className="text-3xl font-bold">Change Your Password</h1>
//                     <p className="text-muted-foreground">
//                         Enter your new password below to change your account password
//                     </p>
//                 </div>
//                 <ReusablePasswordForm action={changePassword} includeOldPassword={true} redirect={redirect} />
//             </div>
//         </div>
//     );
// };

// export default ChangePasswordPage;
