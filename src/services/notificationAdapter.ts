import { NotifyService } from "../application/ports";

export function useNotifier(): NotifyService {
  return {
    notify(message: string) {
      window.alert(message);
    },
  };
}
