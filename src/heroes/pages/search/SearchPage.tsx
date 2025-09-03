import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs";
import { CustomHeader } from "@/components/custom/CustomHeader";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { searchHeroesAction } from "@/heroes/actions/search-heroes.action";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") ?? undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: ["search", { name }],
    queryFn: () => searchHeroesAction({ name }),
    staleTime: 1000 * 60 * 5, // 5 Minutos
  });

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

      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
