interface UsageAnalyticsData {
  promptSuccessRate: number;
  iterationCount: number;
  totalPrompts: number;
  successfulPrompts: number;
  deploymentHealth: 'Healthy' | 'Starting' | 'Not deployed';
  deploymentDetail: string;
}

const deploymentStatusStyles: Record<UsageAnalyticsData['deploymentHealth'], string> = {
  Healthy: 'text-bolt-elements-icon-success',
  Starting: 'text-bolt-elements-icon-warning',
  'Not deployed': 'text-bolt-elements-textTertiary',
};

export function UsageAnalytics({ data }: { data: UsageAnalyticsData }) {
  return (
    <div className="w-full max-w-chat mx-auto px-4 pb-4">
      <div className="rounded-lg border border-bolt-elements-borderColor bg-bolt-elements-background-depth-2 p-4 shadow-sm">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-bolt-elements-textPrimary">Usage analytics</p>
            <p className="text-xs text-bolt-elements-textTertiary">
              Track prompt outcomes, iterations, and deployment health.
            </p>
          </div>
          <div className="text-xs text-bolt-elements-textTertiary">Updated just now</div>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-md border border-bolt-elements-borderColor bg-bolt-elements-background-depth-1 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-bolt-elements-textSecondary">
              Prompt success rate
            </p>
            <p className="mt-2 text-2xl font-semibold text-bolt-elements-textPrimary">{data.promptSuccessRate}%</p>
            <p className="text-xs text-bolt-elements-textTertiary">
              {data.successfulPrompts} of {data.totalPrompts || 0} prompts completed
            </p>
          </div>
          <div className="rounded-md border border-bolt-elements-borderColor bg-bolt-elements-background-depth-1 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-bolt-elements-textSecondary">
              Iteration count
            </p>
            <p className="mt-2 text-2xl font-semibold text-bolt-elements-textPrimary">{data.iterationCount}</p>
            <p className="text-xs text-bolt-elements-textTertiary">Number of prompt-and-response cycles</p>
          </div>
          <div className="rounded-md border border-bolt-elements-borderColor bg-bolt-elements-background-depth-1 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-bolt-elements-textSecondary">
              Deployment health
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className={`text-sm font-semibold ${deploymentStatusStyles[data.deploymentHealth]}`}>
                {data.deploymentHealth}
              </span>
            </div>
            <p className="text-xs text-bolt-elements-textTertiary">{data.deploymentDetail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export type { UsageAnalyticsData };
