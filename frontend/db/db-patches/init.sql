create table patch_log (
  applied TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  version integer
);