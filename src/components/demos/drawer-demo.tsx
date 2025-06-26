export default function DrawerDemo() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Drawer Component</h1>
      <p className="text-muted-foreground">
        This is the drawer component demo page.
      </p>
      <div className="border rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Example</h2>
        <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center">
          Drawer Demo Content
        </div>
      </div>
    </div>
  );
}