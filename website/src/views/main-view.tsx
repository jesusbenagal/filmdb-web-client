import { TextField } from '@filmdb/ui';

export default function MainView() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '16px',
      }}
    >
      <TextField
        label="Search for a movie"
        placeholder="Search for a movie..."
        value=""
        onChange={(value) => console.log(value)}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '16px',
          padding: '16px',
        }}
      ></div>
    </div>
  );
}
