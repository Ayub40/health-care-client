import DoctorsManagementHeader from "@/components/modules/Admin/DoctorsManagement/DoctorsManagementHeader";
// import SpecialitiesManagementHeader from "@/components/modules/Admin/SpecialitiesManagement/SpecialitiesManagementHeader";
// import SpecialitiesTable from "@/components/modules/Admin/SpecialitiesManagement/SpecialitiesTable";
import RefreshButton from "@/components/shared/RefreshButton";
import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";
// import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { getSpecialities } from "@/services/admin/specialitiesManagement";
import { ISpecialty } from "@/types/specialities.interface";
// import { Suspense } from "react";

const AdminDoctorsManagementPage = async () => {
    const specialitiesResult = await getSpecialities();
    console.log(specialitiesResult);

    return (
        <div className="space-y-6">
            <DoctorsManagementHeader specialities={specialitiesResult.data} />
            <div className="flex space-x-2">
                <SearchFilter paramName="searchTerm" placeholder="Search doctors..." />
                <SelectFilter
                    paramName="speciality" // ?speciality="Cardiology"
                    options={specialitiesResult.data.map((speciality: ISpecialty) => ({
                        label: speciality.title,
                        value: speciality.title,
                    }))}
                    placeholder="Filter by speciality"
                />
                <RefreshButton />
            </div>
            {/* <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
                <SpecialitiesTable specialities={result.data} />
            </Suspense> */}
        </div>
    );
};

export default AdminDoctorsManagementPage;
