import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomHeader } from "@/components/custom/CustomHeader";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villanos"
  >("all");

  return (
    <>
      <>
        {/* Header */}
        <CustomHeader
          title="Universo de SuperHeroes"
          description="Descubre, explora y gestiona tus superhéroes y villanos favoritos"
        />
        <CustomBreadCrumbs currentPage="Super Héroes" />
        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setActiveTab("favorites")}
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab("villanos")}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          {/* Mostrar todos los personajes */}
          <TabsContent value="all">
            <HeroGrid />
          </TabsContent>
          {/* Mostrar todos los Favoritos */}
          <TabsContent value="favorites">
            <h1>favoirtess</h1>
            <HeroGrid />
          </TabsContent>
          {/* Mostrar todos los Heroes */}
          <TabsContent value="heroes">
            <h1>heroe</h1>
            <HeroGrid />
          </TabsContent>
          {/* Mostrar todos los Villanos */}
          <TabsContent value="villanos">
            <h1>villanios</h1>
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={8} />
      </>
    </>
  );
};
