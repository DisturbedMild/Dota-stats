import TeamsSearchBar from "@/components/teams/TeamsSearchBar";
import TeamsTable from "@/components/teams/TeamsTable";

const TeamsPage = () => {
  return (
    <section>
      <h1>Teams ranking calculated by Elo</h1>
      <TeamsSearchBar/>
      <TeamsTable/>
    </section>
  );
};

export default TeamsPage;
