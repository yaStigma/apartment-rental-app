export default function HomePage() {
    return (
        <div className="p-6 md:p-10 ">
      <div className="bg-base-200 h-full rounded-2xl shadow-xl  md:p-12">
        <h1 className="text-4xl font-bold text-neutral mb-4">
          Create. Manage. Improve.
        </h1>

        <p className="text-lg mb-6">
          Welcome to the <span className="font-semibold">Property Management Dashboard</span> — everything you need to manage real estate in one place.
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏠</span>
            <p className="text-base">Add new properties</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">✏️</span>
            <p className="text-base">Edit existing listings</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">📸</span>
            <p className="text-base">Upload property photos</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">📊</span>
            <p className="text-base">Track property statuses</p>
          </div>
        </div>

        <div className="mt-8">
          <p className="italic text-sm text-neutral-500">
            Use the menu on the left to get started.
          </p>
        </div>
      </div>
    </div>
    );
    
};
