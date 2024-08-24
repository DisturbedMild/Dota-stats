import MatchOverviewTab from "@/components/match/tabs/overview/MatchOverviewTab";
import TabItem from "@/components/ui/tablist/TabItem";
import TabList from "@/components/ui/tablist/TabList";

const MatchTabList = () => {

  return (
    <TabList activeTabIndex={0} className="mt-20 mb-10 border-b border-white/30 overflow-x-scroll	">
      <TabItem label="overview">
        <MatchOverviewTab />
      </TabItem>
      <TabItem label="benchmarks">
        <MatchOverviewTab />
      </TabItem>
      <TabItem label="draft">
        <MatchOverviewTab />
      </TabItem>
      <TabItem label="performance">
        <MatchOverviewTab />
      </TabItem>
      <TabItem label="laning">
        <MatchOverviewTab />
      </TabItem>
      <TabItem label="combat">
        <MatchOverviewTab />
      </TabItem>
      <TabItem label="farm">
        <MatchOverviewTab />
      </TabItem>
      <TabItem label="items">
        <MatchOverviewTab />
      </TabItem>
      <TabItem label="graphs">
        <MatchOverviewTab />
      </TabItem>
      <TabItem label="casts">
        <MatchOverviewTab />
      </TabItem>
      <TabItem label="objectives">
        <MatchOverviewTab />
      </TabItem>
      <TabItem label="vision">
        <MatchOverviewTab />
      </TabItem>
      <TabItem label="actions">
        <MatchOverviewTab />
      </TabItem>
      <TabItem label="teamfights">
        <MatchOverviewTab />
      </TabItem>
      <TabItem label="analysis">
        <MatchOverviewTab />
      </TabItem>
    </TabList>
  )
}

export default MatchTabList;
