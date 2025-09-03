import { CustomHeader } from "@/components/custom/CustomHeader";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs";

export const SearchPage = () => {
  return (
    <>
      <CustomHeader
        title="Busqueda de Heroes"
        description="Descubre, explora y gestiona tus superhéroes y villanos favoritos"
      />
      <CustomBreadCrumbs
        currentPage="Buscador de Héroes"
        // breadcrumbs={[
        //   { label: "Home1", to: "/" },
        //   { label: "Home2", to: "/" },
        //   { label: "Home3", to: "/" },
        // ]}
      />
      {/* Stats Dashboard */}
      <HeroStats />
      {/* Filter Search  */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
