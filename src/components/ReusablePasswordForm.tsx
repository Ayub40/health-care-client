/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useActionState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import InputFieldError from "@/components/shared/InputFieldError";
import { Field, FieldGroup, FieldLabel, FieldDescription } from "@/components/ui/field";
import { toast } from "sonner";

interface ReusablePasswordFormProps {
    action: (prevState: any, formData: FormData) => Promise<any>;
    includeOldPassword?: boolean; // true = change password, false = reset password
    redirect?: string;
}

const ReusablePasswordForm = ({ action, includeOldPassword = false, redirect }: ReusablePasswordFormProps) => {
    const [state, formAction, isPending] = useActionState(action, null);

    useEffect(() => {
        if (state && !state.success && state.message) {
            toast.error(state.message);
        }
        if (state && state.success) {
            toast.success("Password updated successfully!");

            if (redirect) {
                window.location.href = redirect;
            }
        }
    }, [state, redirect]);

    return (
        <form action={formAction}>
            {redirect && <Input type="hidden" name="redirect" value={redirect} />}
            <FieldGroup>
                <div className="grid grid-cols-1 gap-4">
                    {includeOldPassword && (
                        <Field>
                            <FieldLabel htmlFor="oldPassword">Old Password</FieldLabel>
                            <Input
                                id="oldPassword"
                                name="oldPassword"
                                type="password"
                                placeholder="Enter old password"
                                autoComplete="current-password"
                            />
                            <InputFieldError field="oldPassword" state={state as any} />
                        </Field>
                    )}

                    <Field>
                        <FieldLabel htmlFor="newPassword">New Password</FieldLabel>
                        <Input
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            placeholder="Enter new password"
                            autoComplete="new-password"
                        />
                        <InputFieldError field="newPassword" state={state as any} />
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm new password"
                            autoComplete="new-password"
                        />
                        <InputFieldError field="confirmPassword" state={state as any} />
                    </Field>
                </div>

                <FieldGroup className="mt-4">
                    <Field>
                        <Button type="submit" disabled={isPending} className="w-full">
                            {isPending ? "Processing..." : includeOldPassword ? "Change Password" : "Reset Password"}
                        </Button>

                        <FieldDescription className="px-6 text-center mt-4">
                            Remember your password?{" "}
                            <a href="/login" className="text-blue-600 hover:underline">
                                Back to Login
                            </a>
                        </FieldDescription>
                    </Field>
                </FieldGroup>
            </FieldGroup>
        </form>
    );
};

export default ReusablePasswordForm;
