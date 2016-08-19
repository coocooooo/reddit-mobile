import { makeCookieArchiver } from '@r/redux-state-archiver';

export default makeCookieArchiver(
  state => state.theme,
  state => state.compact,
  state => state.preferences.over18,
  state => state.recentSubreddits,
  (theme, compact, over18, recentSubreddits) => ({
    theme,
    compact,
    over18,
    recentSubreddits,
  })
);