import chalk from 'chalk';

export class ColorLogger {
  static now() {
    return performance.now();
  }

  constructor(
    private logger: Console = console,
    private color: chalk.Chalk = chalk,
  ) {}

  header(header: string) {
    this.debug(this.color.bold(`********** ${header} **********`));
  }

  private debug(first: any, ...args: any[]) {
    if (args.length) {
      this.logger.debug(
        this.color.bold(first),
        ...args.map((arg) => this.color(arg)),
      );
    } else {
      this.logger.debug(this.color(first));
    }
  }

  duration(ms: number) {
    return this.color.italic(`  duration=${ms}ms`);
  }

  async perf<T>(
    fn: () => Promise<T>,
    {
      header,
      pre,
      start = ColorLogger.now(),
    }: {
      header?: string;
      start?: number;
      pre?: ({
        debug,
      }: {
        debug: (...params: Parameters<ColorLogger['debug']>) => void;
      }) => void;
    } = {},
  ) {
    try {
      const result = await fn();
      if (header) this.header(header);
      pre?.({ debug: this.debug.bind(this) });
      const duration = Math.floor(performance.now() - start);
      this.logger.debug(this.duration(duration));
      return result;
    } catch (e) {
      pre?.({ debug: this.debug.bind(this) });
      this.logger.error(e);
      throw e;
    }
  }
}
