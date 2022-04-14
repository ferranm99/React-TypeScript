import React from "react";
import { ExchangeBadge, UnlistedBadge } from "src/components/childs-components/Badges";

export interface IBadgeRendererProps {
  value: any;
  data: Solana.SolanaToken;
}

function BadgeRenderer({ data }: IBadgeRendererProps) {
  return (
    <span>
      {data?.mostRecentTxn?.exchange ? (
        <span>
          <ExchangeBadge exchangeName={data?.mostRecentTxn?.exchange} />
        </span>
      ) : (
        <UnlistedBadge />
      )}
    </span>
  );
}

export default BadgeRenderer;
