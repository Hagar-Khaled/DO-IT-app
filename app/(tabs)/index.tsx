import { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function HomeScreen() {
  const [inputText, setInputText] = useState('');
  const [goals, setGoals] = useState([
    { id: 1, text: 'Design a stunning mobile interface', done: false },
    { id: 2, text: 'Study React Native patterns', done: true },
  ]);
  const [listTitle, setListTitle] = useState('My Goals');
  const scrollRef = useRef(null);

  const handleAddGoal = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;
    const newGoal = { id: Date.now(), text: trimmed, done: false };
    setGoals((prev) => [newGoal, ...prev]);
    setInputText('');
    setTimeout(() => {
      scrollRef.current?.scrollToOffset({ offset: 0, animated: true });
    }, 50);
  };

  const toggleGoal = (id) =>
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? { ...g, done: !g.done } : g))
    );

  const deleteGoal = (id) =>
    setGoals((prev) => prev.filter((g) => g.id !== id));

  const doneCount = goals.filter((g) => g.done).length;
  const progress = goals.length ? (doneCount / goals.length) * 100 : 0;

  const renderGoalItem = ({ item, index }) => (
    <View
      style={[
        styles.goalItem,
        item.done && styles.goalItemDone,
      ]}
    >
      <Text style={styles.goalNum}>#{String(index + 1).padStart(2, '0')}</Text>
      <Text
        style={[
          styles.goalText,
          item.done && styles.goalTextDone,
        ]}
      >
        {item.text}
      </Text>
      <View style={styles.goalActions}>
        <TouchableOpacity
          style={[
            styles.checkBtn,
            item.done && styles.checkBtnDone,
          ]}
          onPress={() => toggleGoal(item.id)}
        >
          <Text style={[styles.checkBtnText, item.done && styles.checkBtnTextDone]}>
            ✓
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.delBtn}
          onPress={() => deleteGoal(item.id)}
        >
          <Text style={styles.delBtnText}>✕</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderEmpty = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyIcon}>◎</Text>
      <Text style={styles.emptyText}>No goals yet</Text>
      <Text style={styles.emptySub}>Type something above and hit Add</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.appLabel}>Goal Tracker</Text>
          <Text style={styles.appTitle}>
            DO IT<Text style={styles.appTitleAccent}>.</Text>
          </Text>
          <Text style={styles.subtitle}>Write it down. Make it happen.</Text>
        </View>

        <View style={styles.divider} />

        {/* INPUT SECTION */}
        <View style={styles.inputSection}>
          <Text style={styles.sectionLabel}>New List</Text>

          <Text style={styles.textLabel}>List Title</Text>
          <TextInput
            style={styles.inputTitleField}
            placeholder="e.g. Q1 Targets, Weekend Plans…"
            placeholderTextColor="#6B6B6B"
            value={listTitle}
            onChangeText={setListTitle}
          />

          <Text style={styles.textLabel}>Add a Goal</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.inputGoal}
              placeholder="What do you want to achieve?"
              placeholderTextColor="#6B6B6B"
              value={inputText}
              onChangeText={setInputText}
              multiline
            />
            <TouchableOpacity
              style={[
                styles.addBtn,
                !inputText.trim() && styles.addBtnDisabled,
              ]}
              onPress={handleAddGoal}
              disabled={!inputText.trim()}
            >
              <Text style={styles.addBtnText}>+ Add</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* GOALS LIST */}
        <View style={styles.listSection}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitleText}>Goals</Text>
            <View style={styles.countBadge}>
              <Text style={styles.countBadgeText}>
                {doneCount}/{goals.length} done
              </Text>
            </View>
          </View>

          {goals.length > 0 && listTitle && (
            <Text style={styles.listNameDisplay}>
              {listTitle}<Text style={styles.listNameAccent}>.</Text>
            </Text>
          )}

          {goals.length > 0 && (
            <View style={styles.progressBarWrap}>
              <View
                style={[
                  styles.progressBarFill,
                  { width: `${progress}%` },
                ]}
              />
            </View>
          )}

          {/* Scrollable List */}
          {goals.length === 0 ? (
            renderEmpty()
          ) : (
            <FlatList
              ref={scrollRef}
              data={goals}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderGoalItem}
              scrollEnabled={false}
              nestedScrollEnabled={false}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 48,
    paddingBottom: 80,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    marginBottom: 40,
    maxWidth: 560,
  },
  appLabel: {
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 3,
    color: '#C8F135',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  appTitle: {
    fontSize: 48,
    fontWeight: '800',
    color: '#F0EDE6',
    marginBottom: 8,
  },
  appTitleAccent: {
    color: '#C8F135',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '300',
    fontStyle: 'italic',
    color: '#6B6B6B',
    marginTop: 8,
  },
  divider: {
    width: '100%',
    maxWidth: 560,
    height: 1,
    backgroundColor: '#2A2A2A',
    marginBottom: 32,
  },
  /* INPUT SECTION */
  inputSection: {
    width: '100%',
    maxWidth: 560,
    marginBottom: 40,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    color: '#6B6B6B',
    marginBottom: 16,
    textTransform: 'uppercase',
  },
  textLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6B6B6B',
    marginBottom: 8,
  },
  inputTitleField: {
    width: '100%',
    backgroundColor: '#161616',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 18,
    fontWeight: '700',
    color: '#F0EDE6',
    marginBottom: 16,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  inputGoal: {
    flex: 1,
    backgroundColor: '#161616',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: '#F0EDE6',
    minHeight: 52,
  },
  addBtn: {
    backgroundColor: '#C8F135',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 14,
    minHeight: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnDisabled: {
    opacity: 0.3,
  },
  addBtnText: {
    color: '#0D0D0D',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  /* GOALS LIST */
  listSection: {
    width: '100%',
    maxWidth: 560,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  listTitleText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    color: '#6B6B6B',
    textTransform: 'uppercase',
  },
  countBadge: {
    backgroundColor: '#1F1F1F',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  countBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#C8F135',
  },
  listNameDisplay: {
    fontSize: 22,
    fontWeight: '800',
    color: '#F0EDE6',
    marginBottom: 16,
  },
  listNameAccent: {
    color: '#FF6B35',
  },
  progressBarWrap: {
    width: '100%',
    height: 4,
    backgroundColor: '#1F1F1F',
    borderRadius: 2,
    marginBottom: 20,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#C8F135',
    borderRadius: 2,
  },
  goalItem: {
    backgroundColor: '#161616',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 10,
  },
  goalItemDone: {
    backgroundColor: '#1A1F0D',
    borderColor: '#2A3A0D',
  },
  goalNum: {
    fontSize: 11,
    fontWeight: '700',
    color: '#C8F135',
    minWidth: 24,
    marginTop: 2,
  },
  goalText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '400',
    color: '#F0EDE6',
    lineHeight: 22,
  },
  goalTextDone: {
    color: '#6B6B6B',
    textDecorationLine: 'line-through',
  },
  goalActions: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  checkBtn: {
    width: 28,
    height: 28,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBtnDone: {
    backgroundColor: '#C8F135',
    borderColor: '#C8F135',
  },
  checkBtnText: {
    fontSize: 13,
    color: '#6B6B6B',
  },
  checkBtnTextDone: {
    color: '#0D0D0D',
  },
  delBtn: {
    width: 28,
    height: 28,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  delBtnText: {
    fontSize: 13,
    color: '#6B6B6B',
  },
  emptyState: {
    paddingHorizontal: 20,
    paddingVertical: 48,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: 12,
    borderStyle: 'dashed',
    alignItems: 'center',
  },
  emptyIcon: {
    fontSize: 32,
    marginBottom: 12,
    color: '#6B6B6B',
  },
  emptyText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6B6B6B',
    marginBottom: 4,
  },
  emptySub: {
    fontSize: 13,
    color: '#444',
  },
});
