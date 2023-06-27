export const Loader = ({ children, isLoading }) => {
  return isLoading ? (
    <div className="alert alert-info text-center">Loading...</div>
  ) : (
    <> {children} </>
  );
};
