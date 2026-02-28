import { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Animated,
  Easing,
} from 'react-native';

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
  listButtonContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  newListBtn: {
    flex: 1,
    backgroundColor: '#2274A5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newListBtnText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  listItemTag: {
    backgroundColor: '#C8F135',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  listItemTagText: {
    color: '#0D0D0D',
    fontSize: 12,
    fontWeight: '700',
  },
  listItemTagRemove: {
    marginLeft: 6,
    fontWeight: 'bold',
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
    color: '#2274A5',
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
  animatedGoalItem: {
    marginBottom: 10,
  },
});

// Animation configuration
const ANIMATION_DURATION = 300;
const ANIMATION_EASING = Easing.out(Easing.cubic);

export default function HomeScreen() {
  const [inputText, setInputText] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [lists, setLists] = useState([
    {
      id: 1,
      title: 'My Goals',
      goals: [
        { id: 1, text: 'Design a stunning mobile interface', done: false },
        { id: 2, text: 'Study React Native patterns', done: true },
      ],
    },
  ]);
  const [activeListId, setActiveListId] = useState(1);
  const scrollRef = useRef<FlatList>(null);
  const animationRefs = useRef<{ [key: number]: Animated.Value }>({});

  const activeList = lists.find((l) => l.id === activeListId);
  const goals = activeList?.goals || [];

  // Initialize animation refs for new goals
  useEffect(() => {
    goals.forEach((goal) => {
      if (!animationRefs.current[goal.id]) {
        animationRefs.current[goal.id] = new Animated.Value(0);
        // Animate entrance
        Animated.timing(animationRefs.current[goal.id], {
          toValue: 1,
          duration: ANIMATION_DURATION,
          easing: ANIMATION_EASING,
          useNativeDriver: true,
        }).start();
      }
    });
  }, [goals]);

  const handleAddGoal = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;
    const newGoal = { id: Date.now(), text: trimmed, done: false };
    setLists((prev) =>
      prev.map((l) =>
        l.id === activeListId ? { ...l, goals: [newGoal, ...l.goals] } : l
      )
    );
    setInputText('');
  };

  const handleCreateNewList = () => {
    const titleTrimmed = inputTitle.trim();
    if (!titleTrimmed) return;
    const newListId = Date.now();
    setLists((prev) => [...prev, { id: newListId, title: titleTrimmed, goals: [] }]);
    setActiveListId(newListId);
    setInputTitle('');
  };

  const handleDeleteList = (listId: number) => {
    setLists((prev) => prev.filter((l) => l.id !== listId));
    if (activeListId === listId && lists.length > 1) {
      setActiveListId(lists[0].id === listId ? lists[1].id : lists[0].id);
    }
  };

  const toggleGoal = (id: number) => {
    setLists((prev) =>
      prev.map((l) =>
        l.id === activeListId
          ? {
              ...l,
              goals: l.goals.map((g) =>
                g.id === id ? { ...g, done: !g.done } : g
              ),
            }
          : l
      )
    );
  };

  const deleteGoal = (id: number) => {
    const animValue = animationRefs.current[id];
    if (animValue) {
      Animated.timing(animValue, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        easing: ANIMATION_EASING,
        useNativeDriver: true,
      }).start(() => {
        setLists((prev) =>
          prev.map((l) =>
            l.id === activeListId
              ? { ...l, goals: l.goals.filter((g) => g.id !== id) }
              : l
          )
        );
        delete animationRefs.current[id];
      });
    } else {
      setLists((prev) =>
        prev.map((l) =>
          l.id === activeListId
            ? { ...l, goals: l.goals.filter((g) => g.id !== id) }
            : l
        )
      );
    }
  };

  const doneCount = goals.filter((g) => g.done).length;
  const progress = goals.length ? (doneCount / goals.length) * 100 : 0;

  const renderGoalItem = ({ item, index }: { item: any; index: number }) => {
    const animValue = animationRefs.current[item.id] || new Animated.Value(1);
    
    const animationStyle = {
      opacity: animValue,
      transform: [
        {
          translateY: animValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-20, 0],
          }),
        },
        {
          scale: animValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0.95, 1],
          }),
        },
      ],
    };

    return (
      <Animated.View
        style={[styles.animatedGoalItem, animationStyle]}
      >
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
      </Animated.View>
    );
  };

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
          <Text style={styles.sectionLabel}>Create or Manage Lists</Text>

          <Text style={styles.textLabel}>New List Title</Text>
          <View style={styles.listButtonContainer}>
            <TextInput
              style={[styles.inputTitleField, { flex: 1, marginBottom: 0 }]}
              placeholder="e.g. Q1 Targets, Weekend Plans…"
              placeholderTextColor="#6B6B6B"
              value={inputTitle}
              onChangeText={setInputTitle}
            />
            <TouchableOpacity
              style={[
                styles.newListBtn,
                !inputTitle.trim() && styles.addBtnDisabled,
              ]}
              onPress={handleCreateNewList}
              disabled={!inputTitle.trim()}
            >
              <Text style={styles.newListBtnText}>+ New</Text>
            </TouchableOpacity>
          </View>

          {/* Active Lists Tags */}
          {lists.length > 0 && (
            <View style={{ marginBottom: 16 }}>
              <Text style={styles.textLabel}>Lists</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {lists.map((list) => (
                  <TouchableOpacity
                    key={list.id}
                    style={[
                      styles.listItemTag,
                      activeListId === list.id && {
                        backgroundColor: '#2274A5',
                      },
                    ]}
                    onPress={() => setActiveListId(list.id)}
                  >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.listItemTagText}>{list.title}</Text>
                      {lists.length > 1 && (
                        <TouchableOpacity
                          onPress={() => handleDeleteList(list.id)}
                          style={{ marginLeft: 6 }}
                        >
                          <Text style={[styles.listItemTagText, styles.listItemTagRemove]}>
                            ✕
                          </Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}

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

          {goals.length > 0 && activeList?.title && (
            <Text style={styles.listNameDisplay}>
              {activeList.title}<Text style={styles.listNameAccent}>.</Text>
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
