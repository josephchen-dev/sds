import { IconArrowRight, IconDownload, IconPlus, IconTrash } from "icons";
import { Section } from "layout";
import {
  Button,
  ButtonDanger,
  ButtonGroup,
  IconButton,
  DestructiveIconButton,
} from "primitives";
import "./buttonShowcase.css";

const variants = ["primary", "neutral", "subtle"] as const;
const dangerVariants = ["danger-primary", "danger-subtle"] as const;
const noop = () => {};

function Block({
  title,
  note,
  children,
}: {
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <div className="button-showcase-block">
      <div>
        <h2>{title}</h2>
        <p>{note}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}

export function Demo() {
  return (
    <Section padding="1200" variant="stroke">
      <div className="button-showcase">
        <header>
          <h1 className="button-showcase-title">Buttons</h1>
          <p className="button-showcase-lede">
            Every button in the system: variants, sizes, icons, states, links,
            and groups.
          </p>
        </header>

        <Block title="Variants & sizes" note="Primary, neutral and subtle in small and medium.">
          <div className="button-showcase-matrix">
            <span />
            <span className="button-showcase-label">Medium</span>
            <span className="button-showcase-label">Small</span>
            {variants.map((v) => (
              <Row key={v} variant={v} />
            ))}
          </div>
        </Block>

        <Block title="Destructive" note="Reserved for irreversible actions.">
          <div className="button-showcase-matrix">
            <span />
            <span className="button-showcase-label">Medium</span>
            <span className="button-showcase-label">Small</span>
            {dangerVariants.map((v) => (
              <div key={v} style={{ display: "contents" }}>
                <span className="button-showcase-label">{v.replace("danger-", "")}</span>
                <ButtonDanger variant={v} className={v === "danger-primary" ? "showcase-beige-danger" : undefined} onPress={noop}>Delete project</ButtonDanger>
                <ButtonDanger variant={v} size="small" className={v === "danger-primary" ? "showcase-beige-danger" : undefined} onPress={noop}>Delete</ButtonDanger>
              </div>
            ))}
          </div>
        </Block>

        <Block title="With icons" note="Leading or trailing icons inherit the button color.">
          <div className="button-showcase-row">
            <Button onPress={noop}><IconPlus />New file</Button>
            <Button variant="neutral" onPress={noop}><IconDownload />Download</Button>
            <Button variant="subtle" onPress={noop}>Continue<IconArrowRight /></Button>
            <Button size="small" onPress={noop}><IconPlus />Add</Button>
          </div>
        </Block>

        <Block title="Icon buttons" note="Icon-only, always labelled for assistive tech.">
          <div className="button-showcase-row">
            <IconButton aria-label="Add" onPress={noop}><IconPlus /></IconButton>
            <IconButton aria-label="Download" variant="neutral" onPress={noop}><IconDownload /></IconButton>
            <IconButton aria-label="Next" variant="subtle" onPress={noop}><IconArrowRight /></IconButton>
            <IconButton aria-label="Add" size="small" onPress={noop}><IconPlus /></IconButton>
            <DestructiveIconButton aria-label="Delete" onPress={noop}><IconTrash /></DestructiveIconButton>
          </div>
        </Block>

        <Block title="States" note="Default, disabled, and rendered as a link.">
          <div className="button-showcase-row">
            <Button onPress={noop}>Default</Button>
            <Button isDisabled>Disabled</Button>
            <Button variant="neutral" isDisabled>Disabled</Button>
            <Button variant="subtle" isDisabled>Disabled</Button>
            <Button href="#" variant="neutral">Anchor link</Button>
          </div>
        </Block>

        <Block title="Button groups" note="Aligned to start, center, end, or justified.">
          <div style={{ display: "grid", gap: "var(--sds-size-space-400)" }}>
            {(["start", "center", "end", "justify"] as const).map((a) => (
              <ButtonGroup key={a} align={a}>
                <Button variant="neutral" onPress={noop}>Cancel</Button>
                <Button onPress={noop}>Save</Button>
              </ButtonGroup>
            ))}
          </div>
        </Block>
      </div>
    </Section>
  );
}

function Row({ variant }: { variant: (typeof variants)[number] }) {
  return (
    <div style={{ display: "contents" }}>
      <span className="button-showcase-label">{variant}</span>
      <Button variant={variant} onPress={noop}>Button</Button>
      <Button variant={variant} size="small" onPress={noop}>Button</Button>
    </div>
  );
}
