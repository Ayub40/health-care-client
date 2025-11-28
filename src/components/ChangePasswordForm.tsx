/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { changePasswordAction } from "@/services/auth/auth.service";
import { useActionState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import InputFieldError from "@/components/shared/InputFieldError";
import { Field, FieldGroup, FieldLabel, FieldDescription } from "@/components/ui/field";
import { toast } from "sonner";

interface ChangePasswordFormProps {
    redirect?: string;
}

const ChangePasswordForm = ({ redirect }: ChangePasswordFormProps) => {
    const [state, formAction, isPending] = useActionState(changePasswordAction, null);

    useEffect(() => {
        if (state && !state.success && state.message) {
            toast.error(state.message);
        }
        if (state && state.success) {
            toast.success("Password changed successfully!");
        }
    }, [state]);

    return (
        <form action={formAction}>
            {redirect && <Input type="hidden" name="redirect" value={redirect} />}
            <FieldGroup>
                <div className="grid grid-cols-1 gap-4">
                    {/* Old Password */}
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

                    {/* New Password */}
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

                    {/* Confirm Password */}
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
                            {isPending ? "Changing..." : "Change Password"}
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

export default ChangePasswordForm;
