"use client";

import { useState } from "react";
import { Column, Heading, Row, Tag, Text, Button } from "@once-ui-system/core";
import { skillGroups } from "@/resources/skills";
import styles from "./home.module.scss";

export function SkillsExplorer() {
  const [active, setActive] = useState(skillGroups[0].id);
  const group = skillGroups.find((g) => g.id === active) ?? skillGroups[0];

  return (
    <Column fillWidth gap="24" paddingX="l" s={{ paddingX: "16" }}>
      <Column gap="8">
        <Heading as="h2" variant="display-strong-xs">
          Skills
        </Heading>
        <Text onBackground="neutral-weak" variant="body-default-l">
          Pick a category to see the tools I work with.
        </Text>
      </Column>

      <Row wrap gap="8" role="tablist" aria-label="Skill categories">
        {skillGroups.map((g) => (
          <Button
            key={g.id}
            role="tab"
            aria-selected={g.id === active}
            size="s"
            variant={g.id === active ? "primary" : "secondary"}
            onClick={() => setActive(g.id)}
          >
            {g.label}
          </Button>
        ))}
      </Row>

      <Column
        key={group.id}
        className={styles.panel}
        padding="24"
        radius="l"
        border="neutral-alpha-medium"
        background="surface"
        gap="16"
        role="tabpanel"
      >
        <Text variant="body-default-m" onBackground="neutral-weak">
          {group.summary}
        </Text>
        <Row wrap gap="8">
          {group.items.map((item, i) => (
            <span key={item.name} className={styles.chip} style={{ animationDelay: `${i * 40}ms` }}>
              <Tag size="l" prefixIcon={item.icon}>
                {item.name}
              </Tag>
            </span>
          ))}
        </Row>
      </Column>
    </Column>
  );
}
