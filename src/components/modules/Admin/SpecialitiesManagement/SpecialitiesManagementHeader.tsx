"use client";

import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import SpecialitiesFormDialog from "./SpecialitiesFormDialog";

const SpecialitiesManagementHeader = () => {
    const router = useRouter();
    const [, startTransition] = useTransition();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleSuccess = () => {
        startTransition(() => {
            // Refresh the page to reflect the new specialty (full ui ta refresh na hoye silently data ta update hobe)
            router.refresh();
        });
    };

    return (
        <>
            <SpecialitiesFormDialog
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onSuccess={handleSuccess}
            />

            <ManagementPageHeader
                title="Specialties Management"
                description="Manage Specialties information and details"
                action={{
                    label: "Add Specialty",
                    icon: Plus,
                    onClick: () => setIsDialogOpen(true),
                }}
            />
        </>
    );
};

export default SpecialitiesManagementHeader;
